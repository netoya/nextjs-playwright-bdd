import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/_shared/_front/ui/components/ui/input-otp";

export function InputOTPDemo() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Input OTP</h2>
      <p className="mb-4">
        Accessible one-time password component with copy paste functionality.
      </p>
      <InputOTP maxLength={6}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
    </div>
  );
}

export function InputOTPPatternDemo() {
  // REGEXP_ONLY_DIGITS_AND_CHARS debe importarse desde "input-otp"
  // import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Pattern</h2>
      <p className="mb-4">
        Usa la prop <code>pattern</code> para definir un patrón personalizado
        para el input OTP.
      </p>
      {/* <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}> ... */}
    </div>
  );
}

export function InputOTPWithSeparatorDemo() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Separator</h2>
      <p className="mb-4">
        Puedes usar el componente <code>&lt;InputOTPSeparator /&gt;</code> para
        agregar un separador entre los grupos de input.
      </p>
      <InputOTP maxLength={4}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
        </InputOTPGroup>
      </InputOTP>
    </div>
  );
}
