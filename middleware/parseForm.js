import formidable from 'formidable';

const parseForm = async (req, res, next) => {
    const [fields, files] = await parse(req);
    req.body = fields;
    req.files = files;
    next();
};

const parse = (req) => {
    var form = new formidable.IncomingForm();
    return new Promise(function (resolve, reject) {
        form.parse(req, (err, fields, files) => {
            if (err) reject(err);
            else resolve([fields, files]);
        });
    });
};

export default parseForm;
