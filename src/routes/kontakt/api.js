/* Don't push this file to GitHub. Sapper imports the url of our message handler on export,
 * but we want to keep it as secret as possible. (Whoever who wants to know it can easily
 * read it out in the browser, but still...)
 */

module.exports = {
    MESSAGE_API: 'https://louise-mail.vercel.app/api/mail',
};