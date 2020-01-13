import React from 'react'
import Logo from './icons/logo.svg'

/**
 * Lembrando que todas as variáveis que estão em uppercase são, de fato, constantes do sistema. Geralmente,
 * outras funções dependem da mesma e elas independem de qualquer outra.
 * 
 * @function ICON_LIST
 * @description Lista todos os icones e referencia seus respectivos SVGs. Trata-se de um Object Literal,
 * em substituição e sugestão de deprecated do método switch. Ele só é utilizado pelo componente `Icon`.
 * Além disso, ele se encontra fora do Componente React para diminuir a complexidade na hora de realizar
 * a renderização do componente.
 * 
 * @example ICON_LIST['logo']
 * @returns <svg ... />
 * 
 * @example ICON_LIST['default']
 * @returns Icone não cadastrado. Por favor, revise nome utilizado.
 */

const ICON_LIST = {
  'logo': () => Logo,
  'default': () => 'Icone não cadastrado. Por favor, revise a prop `name` utilizada.'
}

/**
 * @function Icon
 * @param name Nome do ícone que será importado
 * @description É um alias, em formato de componente, para o Object Literal ICON_LIST. Ou seja, retornará
 * um ícone previamente cadastrado e selecionado.
 * @example <Icon name="logo" />
 * @returns <svg .../>
 */

const Icon = ({ name }) => (ICON_LIST[name] || ICON_LIST['default'])();

export default Icon