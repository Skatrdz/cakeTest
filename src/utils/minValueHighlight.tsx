import clsx from "clsx";

export const MinValueHighlight = (items: number[]) => {
    const minValue = Math.min.apply(null, items)
    return items.map((item, index) => (
        <td
            key={index}
    className={clsx(
            minValue == item && 'item_active'
)}>
    {item}
    </td>
))
}