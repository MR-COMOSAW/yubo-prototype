let messages = [];
exports.getMessages = async(req,res)=>{ res.json(messages); };
exports.sendMessage = async(req,res)=>{ const { text } = req.body; const msg = { user:'User', text }; messages.push(msg); res.json(msg); };