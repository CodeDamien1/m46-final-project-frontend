export const writeCookie = (key, value, days) =>
{
    // key = name of cookie
    // value = jwt_token
    // days = when the cookie will expire

    let date = new Date()
    days = days || 365  // set the default for 365 days
    date.setDate(date.getDate() + days)

    let cookie = document.cookie = key + "=" + value + "; expires=" + date.toGMTString() + "; path=/"

    return cookie
}

export const getCookie = (cookieName) =>
{
    // find the cookie using a regualr expression
    const re = new RegExp(`(?<=${cookieName}=)[^;]*`)
    console.log('regular expression')
    console.log(re)

    try 
    {
        let cookie = document.cookie.match(re)[0]
        return cookie
    } 
    catch (error) 
    {
       console.log('cookie not found')
       return false 
    }
}