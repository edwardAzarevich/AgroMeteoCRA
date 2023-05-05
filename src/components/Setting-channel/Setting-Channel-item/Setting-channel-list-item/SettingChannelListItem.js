// Компонент отображения списков данных для Типа, Скорости, Имени
const ListChannelSpeed = ({ datailItem }) => {
    console.log(datailItem);
    return (
        <option value={datailItem} />
    )
}

export default ListChannelSpeed;