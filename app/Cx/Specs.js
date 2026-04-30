export default function SpecsSection() {
  return (
    <section
      id="specs"
      className="scroll-mt-6 bg-[#E2E0D1] px-4 pb-12 pt-4 sm:px-6 md:px-8 md:pb-16"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          className="mb-8 text-center text-3xl font-black uppercase tracking-wide text-neutral-950 sm:mb-10 sm:text-4xl"
          data-aos="fade-down"
        >
          SPECS
        </h2>

        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          <div className="space-y-8 text-[15px] leading-6 text-neutral-700" data-aos="fade-right">
            <div>
              <h3 className="mb-3 text-3xl font-extrabold text-neutral-700 sm:text-[2rem]">
                Printing
              </h3>
              <div className="space-y-3">
                <p>
                  <strong>Print Technology:</strong>
                  <br />
                  Fused Deposition Modelling (FDM)
                </p>
                <p>
                  <strong>Build Volume:</strong>
                  <br />
                  Single Extrusion: 600 x 600 x 600 mm
                  <br />
                  Dual Extrusion: 540 x 600 x 600 mm
                </p>
                <p>
                  <strong>Print Type:</strong>
                  <br />
                  Product, Food
                </p>
                <p>
                  <strong>Number of Nozzles:</strong>
                  <br />
                  Double, Triple, Quad
                </p>
                <p>
                  <strong>Layer Resolution:</strong>
                  <br />
                  0.05 mm
                </p>
                <p>
                  <strong>Filament Diameter:</strong>
                  <br />
                  1.75 mm
                </p>
                <p>
                  <strong>Filament:</strong>
                  <br />
                  PLA, ABS, Carbon Fiber, Wood, PC, PETC, HIPS, PP
                </p>
                <p>
                  <strong>Compatibility:</strong>
                  <br />
                  Flexible, TPU, PVA, etc.
                </p>
                <p>
                  <strong>Nozzle Diameter:</strong>
                  <br />
                  0.4 mm (0.3, 0.5, 0.6, 0.8, 1.0 mm)
                </p>
                <p>
                  <strong>Print File Type:</strong>
                  <br />
                  STL, OBJ, AMF, G-code
                </p>
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-3xl font-extrabold text-neutral-700 sm:text-[2rem]">
                Size, Weight & Mechanical
              </h3>
              <div className="space-y-3">
                <p>
                  <strong>Product Dimensions & Weight:</strong>
                  <br />
                  915 x 845 x 1085 mm, 125 kg
                </p>
                <p>
                  <strong>Product Size & Weight (Pallet):</strong>
                  <br />
                  940 x 1010 x 1320 mm, 165 kg
                </p>
                <p>
                  <strong>Construction:</strong>
                  <br />
                  Powder-coated steel, aluminium casting for motion
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8 text-[15px] leading-6 text-neutral-700" data-aos="fade-left">
            <div>
              <h3 className="mb-3 text-3xl font-extrabold text-neutral-700 sm:text-[2rem]">
                Speed
              </h3>
              <div className="space-y-3">
                <p>
                  <strong>Best Printing Speed:</strong>
                  <br />
                  45 mm/s
                </p>
                <p>
                  <strong>Max Printing Speed:</strong>
                  <br />
                  120 mm/s
                </p>
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-3xl font-extrabold text-neutral-700 sm:text-[2rem]">
                Temperature
              </h3>
              <div className="space-y-3">
                <p>
                  <strong>Ambient Operating Temperature:</strong>
                  <br />
                  15-32 °C
                </p>
                <p>
                  <strong>Max Nozzle Temperature:</strong>
                  <br />
                  420 °C
                </p>
                <p>
                  <strong>Max Bed Temperature:</strong>
                  <br />
                  100 °C
                </p>
                <p>
                  <strong>Max Chamber Temperature:</strong>
                  <br />
                  70 °C (D600)
                </p>
                <p>
                  <strong>Filament Drying Temperature:</strong>
                  <br />
                  45 °C / 65 °C (D600)
                </p>
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-3xl font-extrabold text-neutral-700 sm:text-[2rem]">
                Applications
              </h3>
              <div className="space-y-3">
                <p>
                  <strong>Computer:</strong>
                  <br />
                  Apps - Food - Products - Health - Air - Water Quality
                </p>
                <p>
                  <strong>Recycler:</strong>
                  <br />
                  Decompose with heat, chemicals, bacteria
                </p>
                <p>
                  <strong>Future Apps:</strong>
                  <br />
                  Print drugs/prescriptions, print body parts, organs, etc.
                  <br />
                  with protein DNA software
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
