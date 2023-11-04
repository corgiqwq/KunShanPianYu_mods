function theoryChoice (num) {
    switch(num)
    {
        case 0: return '劣等马'
        case 1: return '中等马'
        case 2: return '优等马'
    }
}window.theoryChoice = theoryChoice;

function theoryChoiceDelete (nums, num) {
    // 从数组nums中元素num
    const idx = nums.indexOf(num)
    return nums.splice(idx, 1);
}window.theoryChoiceDelete = theoryChoiceDelete;