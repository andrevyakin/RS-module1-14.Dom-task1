//1-й способ
document.body.innerHTML = `
<form class="create-user-form">
    <label>
        Имя
        <input type="text" name="userName" placeholder="Введите ваше имя">
    </label>
    <label>
        Пароль
        <input type="password" name="password" placeholder="Придумайте Пароль">
    </label>
    <button type="submit">
        Подтвердить
    </button>
</form>
`;

//2-й способ
const  createLabelAndInput= (textLabel, typeInput, nameInput, textPlaceholder) => {
    const label = document.createElement("label");
    label.textContent = textLabel;
    const input = document.createElement("input");
    input.type = typeInput;
    input.name = nameInput;
    input.placeholder = textPlaceholder;
    input.style.margin = "0 0.25rem"
    label.append(input);
    return label;
}

const form = document.createElement("form");
form.classList = "create-user-form";
form.append(createLabelAndInput("Имя", "text", "userName", "Введите ваше имя"));
form.append(createLabelAndInput("Пароль", "password", "password", "Придумайте Пароль"));
const button = document.createElement("button");
button.type = "submit";
button.textContent = "Подтвердить";
form.append(button);
document.body.append(form);