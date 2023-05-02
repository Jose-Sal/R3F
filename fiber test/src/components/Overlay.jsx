import { Scroll } from "@react-three/drei"

const Section = (props)=>{
    return(
        <section className="h-screen flex flex-col justify-center p-10">
        <div className="w-1/2 flex item-center justify-center">
            <div className="max-w-sm w-full">
                <div className="bg-white rounded-lg px-8 py-12">
                    {props.children}
                </div>
            </div>
        </div>
    </section>
    );
}

export const Overlay=()=>{
    return (
    <Scroll html>
        <Section>
            <h1 className="text-gray-500">first world</h1>
            <ul></ul>
            <li>hello</li>
            <li>how</li>
            <li>are</li>
            <li>you</li>
        </Section>
        <Section>
            <h1 className="text-gray-500">first world</h1>
        </Section>
        <Section>
            <h1 className="text-gray-500">first world</h1>
        </Section>
        <Section>
            <h1 className="text-gray-500">first world</h1>
        </Section>
        <Section>
            <h1 className="text-gray-500">first world</h1>
        </Section>
        <Section>
            <h1 className="text-gray-500">first world</h1>
        </Section>
        <Section>
            <h1 className="text-gray-500">first world</h1>
        </Section>
        <h1 className="">hello!</h1>
    </Scroll>
    );
};