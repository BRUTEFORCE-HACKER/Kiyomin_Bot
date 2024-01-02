module.exports.config = {
    name: "pending",
    version: "1.0.5",
    credits: "Mirai Team",
    hasPermission: 2,
    description: "Manage bot's waiting messages",
    commandCategory: "system",
    cooldowns: 5,
    usePrefix: true
};

module.exports.languages = {
    "vi": {
        "invaildNumber": "%1 không phải là một con số hợp lệ",
        "cancelSuccess": "Đã từ chối thành công %1 nhóm!",
        "notiBox": "Box của bạn đã được admin phê duyệt để có thể sử dụng bot",
        "approveSuccess": "Đã phê duyệt thành công %1 nhóm!",
        "cantGetPendingList": "Không thể lấy danh sách các nhóm đang chờ!",
        "returnListPending": "»「PENDING」«❮ Tổng số nhóm cần duyệt: %1 nhóm ❯\n\n%2",
        "returnListClean": "「PENDING」Hiện tại không có nhóm nào trong hàng chờ",
    },
    "en": {
        "invaildNumber": "%1 is not a valid number",
        "cancelSuccess": "Refused %1 thread(s) successfully!",
        "approveSuccess": "Approved successfully %1 thread(s)!",
        "cantGetPendingList": "Can't retrieve the pending list!",
        "returnListPending": "»「PENDING」«❮ Total threads to approve: %1 thread(s) ❯\n\n%2",
        "returnListClean": "「PENDING」There are no threads in the pending list at the moment",
    },
};

module.exports.handleReply = async function ({ api, event, handleReply, getText }) {
    if (String(event.senderID) !== String(handleReply.author)) return;
    const { body, threadID, messageID } = event;
    var count = 0;

    if (isNaN(body) && (body.indexOf("c") === 0 || body.indexOf("cancel") === 0)) {
        const index = body.slice(1).split(/\s+/);
        for (const singleIndex of index) {
            if (isNaN(singleIndex) || singleIndex <= 0 || singleIndex > handleReply.pending.length) {
                return api.sendMessage(getText("invaildNumber", singleIndex), threadID, messageID);
            }
            api.removeUserFromGroup(api.getCurrentUserID(), handleReply.pending[singleIndex - 1].threadID);
            count += 1;
        }
        return api.sendMessage(getText("cancelSuccess", count), threadID, messageID);
    } else {
        const index = body.split(/\s+/);
        for (const singleIndex of index) {
            if (isNaN(singleIndex) || singleIndex <= 0 || singleIndex > handleReply.pending.length) {
                return api.sendMessage(getText("invaildNumber", singleIndex), threadID, messageID);
            }
            api.sendMessage(
                `${(!global.config.BOTNAME) ? " " : global.config.BOTNAME} Connected Successfully!\nUse ${global.config.PREFIX}help for more info :>`,
                handleReply.pending[singleIndex - 1].threadID
            );
            count += 1;
        }
        return api.sendMessage(getText("approveSuccess", count), threadID, messageID);
    }
};

module.exports.run = async function ({ api, event, getText }) {
    const { threadID, messageID } = event;
    const commandName = this.config.name;
    var msg = "",
        index = 1;

    try {
        var spam = await api.getThreadList(100, null, ["OTHER"]) || [];
        var pending = await api.getThreadList(100, null, ["PENDING"]) || [];
    } catch (e) {
        return api.sendMessage(getText("cantGetPendingList"), threadID, messageID);
    }

    const list = [...spam, ...pending].filter(group => group.isSubscribed && group.isGroup);

    for (const single of list) msg += `${index++}/ ${single.name}(${single.threadID})\n`;

    if (list.length != 0) {
        return api.sendMessage(getText("returnListPending", list.length, msg), threadID, (error, info) => {
            global.client.handleReply.push({
                name: commandName,
                messageID: info.messageID,
                author: event.senderID,
                pending: list,
            });
        }, messageID);
    } else {
        return api.sendMessage(getText("returnListClean"), threadID, messageID);
    }
}