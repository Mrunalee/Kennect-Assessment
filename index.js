let data = {
    header: ["", ""],
    rows: [
        ["90", 90],
        ["8", 8],
        ["50", 50],
        ["50", 50],
        ["82", 82],
        ["33", 33],
        ["10", 10],
        ["34", 34],
        ["41", 41],
        ["80", 80],
        ["10", 10],
        ["24",24],
        ["74", 74],
        ["67", 67],
        ["27", 27],
        ["54", 54],["49", 49],["19", 19],["1", 1],["25", 25],["98", 98],["89", 89],["26", 26],["24", 24],["3", 3],["29", 29],["78",78],
        ["49", 49],["99", 99],["64", 64],["82", 82],["74", 74],["8", 8],["13", 13],["85", 85],
        ["91", 91],["45", 45],["50", 50],["75", 75],["50", 50],["5", 5],["77", 77],
        ["15", 15],["33", 33],["12", 12],["38", 38]
    ]
};

// Create the chart using AnyChart
var chart = anychart.column();
chart.data(data);
chart.yAxis().labels(false);
chart.container("container");
chart.draw();

// Function to render bars
function renderBars() {
    const barsContainer = document.getElementById('sorts');
    barsContainer.innerHTML = '';

    data.rows.forEach(row => {
        const barElement = document.createElement('div');
        barElement.className = 'data';
        barElement.style.height = `${row[1]}px`; // Adjust the scaling factor as needed
        barsContainer.appendChild(barElement);
    });
}

// Function to randomize bars
function randomizeBars() {
    data.rows = data.rows.sort(() => Math.random() - 0.5);
    renderBars();
}

// Function to perform Insertion Sort
function insertionSort() {
    const n = data.rows.length;

    for (let i = 1; i < n; i++) {
        let currentElement = data.rows[i];
        let j = i - 1;

        while (j >= 0 && data.rows[j][1] > currentElement[1]) {
            data.rows[j + 1] = data.rows[j];
            j--;
        }

        data.rows[j + 1] = currentElement;
    }

    renderBars();
}

// Function to perform Selection Sort
function selectionSort() {
    const n = data.rows.length;

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < n; j++) {
            if (data.rows[j][1] < data.rows[minIndex][1]) {
                minIndex = j;
            }
        }

        // Swap the found minimum element with the element at index i
        let temp = data.rows[minIndex];
        data.rows[minIndex] = data.rows[i];
        data.rows[i] = temp;
    }

    renderBars();
}

// Function to perform Bubble Sort
function bubbleSort() {
    const n = data.rows.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (data.rows[j][1] > data.rows[j + 1][1]) {
                // Swap the elements if they are in the wrong order
                let temp = data.rows[j];
                data.rows[j] = data.rows[j + 1];
                data.rows[j + 1] = temp;
            }
        }
    }

    renderBars();
}

// Function to perform Quick Sort
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[Math.floor(arr.length / 2)];
    const left = arr.filter(element => element[1] < pivot[1]);
    const right = arr.filter(element => element[1] > pivot[1]);

    return [...quickSort(left), pivot, ...quickSort(right)];
}

// Function to perform Merge Sort
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex][1] < right[rightIndex][1]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}


renderBars();

