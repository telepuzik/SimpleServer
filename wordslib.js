/**
 * Created by  on 09.09.2014.
 */
exports.getWords = function (){
    var Word = function(formZero, formOne, formTwo, formThree, formFour, formFive) {
        this.formZero = formZero;
        this.formOne = formOne;
        this.formTwo = formTwo;
        this.formThree = formThree;
        this.formFour = formFour;
        this.formFive = formFive;
    };
    return [
        new Word('говорить, сказать', 'say', 'said', 'said', 'saying', 'says'),
        new Word('делать', 'make', 'made', 'made', 'making', 'makes'),
        new Word('идти, уходить', 'go', 'went', 'gone', 'going', 'goes'),
        new Word('брать', 'take', 'took', 'taken', 'taking', 'takes'),
        new Word('идти, приходить', 'come', 'came', 'come', 'coming', 'comes'),
        new Word('видеть', 'see', 'saw', 'seen', 'seeing', 'sees'),
        new Word('знать', 'know', 'knew', 'known', 'knowing', 'knows'),
        new Word('получать', 'get', 'got', 'got', 'getting', 'gets'),
        new Word('давать', 'give', 'gave', 'given', 'giving', 'gives'),
        new Word('находить', 'find', 'found', 'found', 'finding', 'finds'),
        new Word('думать', 'think', 'thought', 'thought', 'thinking', 'thinks'),
        new Word('рассказывать, сказать', 'tell', 'told', 'told', 'telling', 'tells'),
        new Word('становиться, делаться', 'become', 'became', 'become', 'becoming', 'becomes'),
        new Word('показывать', 'show', 'showed', 'shown', 'showing', 'shows'),
        new Word('оставлять, покидать, уезжать', 'leave', 'left', 'left', 'leaving', 'leaves'),
        new Word('чувствовать', 'feel', 'felt', 'felt', 'feeling', 'feels')
    ];
};
