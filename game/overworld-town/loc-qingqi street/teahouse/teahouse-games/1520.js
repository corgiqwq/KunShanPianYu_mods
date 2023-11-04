function chooseNum (nums) {

    // var nums = [num1, num2, num3, num4];

    // 生成一个随机索引
    var index = Math.floor(Math.random() * nums.length);

    // 随机从数组中返回数字
    return nums[index];

}window.chooseNum = chooseNum;