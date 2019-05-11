export class Post {

    public constructor(
        public title: string, public content?: string,
        public loveIts?: number, public created_at?: Date) {
        this.content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
            'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ' +
            'ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea ' +
            'commodo consequat.';
        this.loveIts = 0;
        this.created_at = new Date();
    }
}
