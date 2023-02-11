import React from "react";

type ButtonNameType = {
    name: string
    callback: () => void // 3. Передаём коллбэк через типизацию
}

export const Button = (props: ButtonNameType) => {

    const OnClickHandler = () => { // 4. Создаём функцию для срабатывания кнопки
        props.callback() // 5. Выбрасываем в ней коллбэк через пропсы
    }

    return <button onClick={OnClickHandler}>{props.name}</button> // 6. Передаём функцию с коллбэком
    // в событие onClick
}