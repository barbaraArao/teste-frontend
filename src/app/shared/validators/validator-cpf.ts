import { AbstractControl } from '@angular/forms';

export function VerificarCPF(control: AbstractControl) {
    let str = control.value ? control.value.toString() : '';
        str = str.replace(/\./gi, "");
        str = str.replace(/\//gi, "");
        str = str.replace(/\-/gi, "");

    if ((str == '00000000000') || 
        (str == '11111111111') || 
        (str == '22222222222') || 
        (str == '33333333333') || 
        (str == '44444444444') || 
        (str == '55555555555') || 
        (str == '66666666666') || 
        (str == '77777777777') || 
        (str == '88888888888') || 
        (str == '99999999999') ||
        (str == '01234567890')) {
        return { CPFError: true };
    }
if (str.length == 11) {
        let numero: number = 0;
        let caracter: string = '';
        let numeros: string = '0123456789';
        let j: number = 10;
        let somatorio: number = 0;
        let resto: number = 0;
        let digito1: number = 0;
        let digito2: number = 0;
        let cpfAux: string = '';

        cpfAux = str.substring(0, 9);

        for (let i: number = 0; i < 9; i++) {
            caracter = cpfAux.charAt(i);
            if (numeros.search(caracter) == -1) {
                return { CPFError: true };
            }
            numero = Number(caracter);
            somatorio = somatorio + (numero * j);
            j--;
        }

        resto = somatorio % 11;
        digito1 = 11 - resto;

        if (digito1 > 9) {
            digito1 = 0;
        }

        j = 11;
        somatorio = 0;
        cpfAux = cpfAux + digito1;

        for (let i: number = 0; i < 10; i++) {
            caracter = cpfAux.charAt(i);
            numero = Number(caracter);
            somatorio = somatorio + (numero * j);
            j--;
        }
        resto = somatorio % 11;
        digito2 = 11 - resto;

        if (digito2 > 9) {
            digito2 = 0;
        }
        cpfAux = cpfAux + digito2;

        if (str != cpfAux) {
            return { CPFError: true };
        }
        else {
            return null;
        }
    }


    return null;
}