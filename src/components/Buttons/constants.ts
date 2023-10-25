export type RedirectIconButton = {
    label: string,
    link: string
}

export type SmallTextIconButton = {
    icon: string,
    label: string,
    extraStyle: string,
}

type ButtonVariation = {
    buttonStyle: string;
    buttonIconStyle: string;
    buttonTextStyle: string
    tooltipStyle?: string;
}

const secondary = <ButtonVariation>{
    buttonStyle: ' border-blueberry-900 hover:border-blueberry-500 text-blueberry-900 hover:text-blueberry-500',
    buttonIconStyle: 'h-8 w-8',
    buttonTextStyle: '',
    tooltipStyle: 'tracking-wide font-light text-truffle-50 bg-blueberry-900'   
}

const ghost = <ButtonVariation>{
    buttonStyle: '',
    buttonIconStyle: '',
    buttonTextStyle: '',
    tooltipStyle: ''
}

const dark = <ButtonVariation>{
    buttonStyle: 'border-blueberry-900 hover:border-blueberry-500 bg-blueberry-900 hover:bg-blueberry-500',
    buttonIconStyle: 'h-8 w-8 text-truffle-200',
    buttonTextStyle: 'text-truffle-200',
    tooltipStyle: 'tracking-wide font-light text-truffle-50 bg-blueberry-900'
}

const light = <ButtonVariation>{
    buttonStyle: 'border-truffle-200 hover:border-truffle-200/50 bg-truffle-200 hover:bg-truffle-200/50',
    buttonIconStyle: 'h-8 w-8 text-blueberry-800',
    buttonTextStyle: 'text-blueberry-800',
    tooltipStyle: 'text-blueberry-900 bg-truffle-200'
}

const disable = <ButtonVariation>{
    buttonStyle: '',
    buttonIconStyle: '',
    buttonTextStyle: '',
    tooltipStyle: ''   
}

export const variations = <Record<string, ButtonVariation>>{
    "secondary": secondary,
    "ghost": ghost,
    "dark": dark,
    "light": light,
    "disable": disable,
}
