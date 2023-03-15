// ----------- selecionar Elementos -----------

function selector(id){ return document.querySelector(id)};
function selectorAll(id){ return document.querySelectorAll(id)};

// ----------- modificações de classes -----------

function modifyClass(el, action, clas){ el.classList[action](clas)};

// ----------- transição de formularios -----------

function transiction(btn, atual, futuro){
  btn.addEventListener("click", () =>{
  modifyClass(atual, 'add', 'fade-out-form');
  setTimeout(() => {
    modifyClass(futuro, 'remove', 'fade-out-form');
    modifyClass(futuro, 'remove', 'd-none');
    modifyClass(futuro, 'add', 'fade-in-form');
    modifyClass(atual, 'add', 'd-none');
  }, 1000);
})};

// ----------- desabilitar botão e verificação de formularios checados  -----------

function verfyCheck(inputList, btn){
  inputList.forEach(input => {
    input.addEventListener("change", () => input.checked ? modifyClass(btn, 'remove', 'disabled') : modifyClass(btn, 'add', 'disabled'))})};

// ----------- seleção de formularios e botões de formularios -----------

const formObj = selector("#afine-form-objetivos");
const formMed = selector("#afine-form-medidas");
const formAcount = selector("#afine-form-conta");
const btnNextObj = selector("#btn-next-form-objetivos");
const btnNextMedidas = selector("#btn-next-form-medidas")
const btnExitMedidas = selector("#btn-exit-form-medidas");
const btnExitAcount = selector("#btn-exit-form-cadastro");
const inputsFormObj = selectorAll(".afine-check-obj");
const inputsFormMed = selectorAll(".afine-check-med");

// ----------- Transições de formularios -----------

transiction(btnNextObj, formObj, formMed);
transiction(btnNextMedidas, formMed, formAcount);
transiction(btnExitMedidas, formMed, formObj);
transiction(btnExitAcount, formAcount, formMed);

// ----------- lactante -----------

const feminino = selector("#feminino");
const divFeminino = selector("#afine-lactante");
const masculino = selector("#masculino");
feminino.addEventListener("change", () => {modifyClass(divFeminino, 'remove', 'd-none')});
masculino.addEventListener("change", () => {modifyClass(divFeminino, 'add', 'd-none')});

// ----------- botão desabilitado verificação de formulario -----------

verfyCheck(inputsFormObj, btnNextObj);
verfyCheck(inputsFormMed, btnNextMedidas);

// ----------- botão visualizar senha -----------

const btnPass = selector("#afine-btn-senha");
const inputPass = selector(".afine-input-senha");
const iconPass = selector(".afine-icon-button");

btnPass.addEventListener("click", () => { inputPass.type === "password" ? (inputPass.type = "text", modifyClass(iconPass, 'remove','fa-eye'), modifyClass(iconPass, 'add', 'fa-eye-slash')) : (inputPass.type = "password", modifyClass(iconPass, 'remove', 'fa-eye-slash'), modifyClass(iconPass, 'add','fa-eye'))});

