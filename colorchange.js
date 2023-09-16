document.addEventListener('DOMContentLoaded', function () {
    const gridItems = document.querySelectorAll('.small-grid-item');
    const clickedItemIds = [];

    gridItems.forEach(function (item) {
        item.addEventListener('click', function () {
            const itemId = this.id;
            if (itemId === 'grid-item-9') {
                gridItems.forEach(function (gridItem) {
                    gridItem.style.backgroundColor = 'blue';
		     const removedItemId = clickedItemIds.shift();
                     

                });
            } else {
                this.style.backgroundColor = 'red';
		clickedItemIds.push(itemId);
            }
        });
    });
});
