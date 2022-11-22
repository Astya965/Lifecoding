// O(n**2) solution
export const twoSum = (nums: number[], target: number): number[] => {
    let targetArr: number[] = [];

    for (let i = 0; i < nums.length; i++) {
        if (targetArr.length > 0) {
            break;
        }

        for (let j = 0; j < nums.length; j++) {
            if (targetArr.length > 0 || i === j) {
                break;
            }

            if (nums[i] + nums[j] === target) {
                targetArr.push(j);
                targetArr.push(i);
            }
        }
    }

    return targetArr;
};

// 0(n) solution
export const fastTwoSum = (nums: number[], target: number): number[] => {
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (map.has(target - nums[i])) {
            return [map.get(target - nums[i]), i];
        }
        map.set(nums[i], i);
    }

    return [];
}

// 0(n) solution
export const anotherFastTwoSum = (nums: number[], target: number): number[] => {
    let hash = {};

    for (let i = 0; i < nums.length; i++) {
        if (hash[target - nums[i]] !== undefined) {
            return [hash[target - nums[i]], i];
        }
        hash[nums[i]] = i;
    }

    return [];
}