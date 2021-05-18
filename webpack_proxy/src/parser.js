export default class EmailParser{
    constructor(email){
        this.email = email;
    }

    get name() {
        if (!this.isCorrect) return null;
        return this.email.substring(0, this.email.indexOf('@'));
    }

    get domain() {
        if (!this.isCorrect) return null;
        return this.email.substring(this.email.indexOf('@') + 1);
    }

    get isCorrect() {
        return this.email.includes('@');
    }
}