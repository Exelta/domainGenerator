let pronoun = ['the', 'our','this'];
let adj = ['great', 'big', 'power'];
let noun = ['jogger', 'racoon', 'dog'];
let extension = ['.com', '.net', '.io']
let domain = '';
let pIndex;
let aIndex;
let nIndex;
let eIndex;
for (pIndex = 0; pIndex < pronoun.length; pIndex++) {
    for (aIndex = 0; aIndex < adj.length; aIndex++) {
        for (nIndex = 0; nIndex < noun.length; nIndex++) {
            for (eIndex = 0; eIndex < extension.length; eIndex++) {
                domain = pronoun[pIndex] + adj[aIndex] + noun[nIndex] + extension[eIndex];
                console.log(domain);
            }
        }
    }
}





