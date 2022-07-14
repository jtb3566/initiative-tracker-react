import rollD20 from "./rollD20";

describe('rollD20', () => {
    it('returns a number', () =>{
        const result = rollD20()
        expect(typeof(result)).toBe('number')
    })
})