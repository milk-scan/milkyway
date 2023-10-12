type ButtonVariation = {
    tooltipStyle?: string;
    buttonStyle: string;
    buttonTextStyle: string
    buttonIconStyle: string;
}

const secondary = <ButtonVariation>{
    buttonStyle: '',
    buttonTextStyle: ''
}

const ghost = <ButtonVariation>{
    buttonStyle: '',
    buttonTextStyle: ''
}

const dark = <ButtonVariation>{
    buttonStyle: 'border-blueberry-900 hover:border-blueberry-600 bg-blueberry-900 hover:bg-blueberry-600',
    buttonIconStyle: 'h-8 w-8 text-truffle-200',
    buttonTextStyle: 'text-truffle-200',
    tooltipStyle: 'tracking-wide font-light text-truffle-50 bg-blueberry-900'
}

const light = <ButtonVariation>{
    buttonStyle: 'border-truffle-200 hover:border-opacity-50 bg-truffle-200 hover:bg-opacity-50',
    buttonIconStyle: 'h-8 w-8 text-blueberry-800',
    tooltipStyle: 'text-blueberry-900 bg-truffle-200'
}

export const variations = <Record<string, ButtonVariation>>{
    "secondary": secondary,
    "ghost": ghost,
    "dark": dark,
    "light": light,
}
