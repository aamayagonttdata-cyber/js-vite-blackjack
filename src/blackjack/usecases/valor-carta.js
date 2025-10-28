

/**
 * 
 * @param {String} carta Ejemplo: 'D','H','S'
 * @returns {Number} Ejemplo: 1, 5, 11
 */
export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}