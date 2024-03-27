export {};

/**
 * Create a function protectEmail which hides some symbols of the email
 */
function protectEmail(email: string) {
    const [user, domain] = email.split("@");
    let protectedUser = user.length > 2 ? user.slice(0, Math.min(user.length - 1, 3)) + "..." : "...";
    return `${protectedUser}@${domain}`;

}

console.log(protectEmail("secret123@codelex.io")); // Expected result: sec...@codelex.io
console.log(protectEmail("example@example.com")); // Expected result: exa...@example.com
console.log(protectEmail('12345@example.com')); // Expected result: 12...@example.com
console.log(protectEmail('12@example.com')); // Expected result: ...@example.com