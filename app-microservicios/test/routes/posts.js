


module.exports = (req, res) => {
    console.log(req.user);
    res.json([
        {
            id: 0,
            title: 'post 1'
        },
        {
            id: 1,
            title: 'post 2'
        }
    ]);
};
