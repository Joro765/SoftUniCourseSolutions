function solution() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            return `Post: ${this.title}\nContent: ${this.content}`
        }
    }


    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }

        addComment(comment) {
            this.comments.push(comment);
        }

        toString() {
            if (this.comments.length > 0) {
                let res = ``;
                for (const comment of this.comments) {
                    res += `* ${comment}\n`;

                }
                return super.toString() + `\nRating: ${this.likes - this.dislikes}\nComments:\n${res}`
            } else {
                return super.toString() + `\nRating: ${this.likes - this.dislikes}`
            }
        }
    }

    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = views;
        }

        view() {
            this.views++;
            return this;
        }

        toString() {
            return super.toString() + `\nViews: ${this.views}`
        }
    }



    return {
        Post,
        SocialMediaPost,
        BlogPost
    }
}



const classes = solution();
let post = new classes.Post("Post", "Content");

let scm = new classes.SocialMediaPost("TestTitle", "TestContent", 25, 30);

scm.addComment("Good post");


console.log(scm.toString());