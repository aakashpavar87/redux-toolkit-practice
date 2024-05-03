import Chance from "chance"

const fakeUserGenerator = () =>{
    const chance = new Chance();
    return chance.name({ middle_initial: true });
}
export default fakeUserGenerator;