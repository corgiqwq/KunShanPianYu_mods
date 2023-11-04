function chooseNum (nums) {

    // var nums = [num1, num2, num3, num4];

    // 生成一个随机索引
    var index = Math.floor(Math.random() * nums.length);

    // 随机从数组中返回数字
    return nums[index];

}window.chooseNum = chooseNum;

function theoryChoice (house) {
    switch(house)
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