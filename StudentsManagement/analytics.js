import fs from 'fs'

export function getAnalytics() {
    const data = fs.readFileSync('db.json', 'utf-8')
    const analytics = JSON.parse(data ?? {})?.analytics
    return analytics
}