const whitelist = ['localhost']

export default function (req, res, next) {
  const referer = req.get('referer')
  if (referer) {
    const { hostname } = new URL(referer)
    if (!whitelist.includes(hostname)) {
      res.status(403).send('Forbidden')
      return
    }
  }
  next()
}
