/**
 * 设置utf8编码
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
function setUTF8(req, res, next) {
   res.header('Content-Type', 'application/json;charset=utf8');
   next();
}

export {
   setUTF8
};