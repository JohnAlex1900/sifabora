// src/pages/PaymentPage.tsx
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { FaCreditCard } from "react-icons/fa";

const PaymentPage = () => {
  const [method, setMethod] = useState<"mpesa" | "card">("mpesa");
  const [selectedBank, setSelectedBank] = useState<string | null>(null);
  const [mpesaLoading, setMpesaLoading] = useState(false);
  const [cardLoading, setCardLoading] = useState(false);

  // Controlled inputs for both forms
  const [mpesaName, setMpesaName] = useState("");
  const [mpesaEmail, setMpesaEmail] = useState("");
  const [mpesaAmount, setMpesaAmount] = useState<number | "">("");

  const [cardName, setCardName] = useState("");
  const [cardEmail, setCardEmail] = useState("");
  const [cardAmount, setCardAmount] = useState<number | "">("");

  const [selectedTier, setSelectedTier] = useState<string | null>(null);
  const [currency, setCurrency] = useState<string>("KES");

  useEffect(() => {
    // Read query params and prefill
    const params = new URLSearchParams(window.location.search);
    const tier = params.get("tier");
    const amount = params.get("amount");
    const cur = params.get("currency");
    if (tier) setSelectedTier(tier);
    if (amount) {
      const n = parseFloat(amount);
      if (!isNaN(n)) {
        setMpesaAmount(n);
        setCardAmount(n);
      }
    }
    if (cur) setCurrency(cur.toUpperCase());
  }, []);

  const bankNames: { [key: string]: string } = {
    rafiki: "Rafiki Microfinance Bank",
    family: "Family Bank",
  };

  const handleCardPayment = (e: React.FormEvent) => {
    e.preventDefault();

    setCardLoading(true);

    const email = cardEmail;
    const name = cardName;
    const amount = Number(cardAmount);

    if (!email || !name || !amount) {
      toast.warn("Please fill in all fields.");
      setCardLoading(false);
      return;
    }

    const handler = (window as any).PaystackPop.setup({
      key: "pk_live_0be5eac2f6a0b738a406fef0b55a4b5cdc350426", // 🔁 Replace with your test/public key
      email,
      amount: amount * 100, // Paystack expects amount in smallest currency unit
      currency: currency || "KES",
      ref: "" + Math.floor(Math.random() * 1000000000 + 1),
      metadata: {
        custom_fields: [
          {
            display_name: name,
            variable_name: "name",
            value: name,
          },
        ],
      },
      callback: function (response: any) {
        toast.success("Payment successful! Reference: " + response.reference);
        setCardLoading(false);
      },
      onClose: function () {
        toast.info("Payment window closed.");
        setCardLoading(false);
      },
    });

    handler.openIframe();
  };

  const handleMpesaPayment = (e: React.FormEvent) => {
    e.preventDefault();
    setMpesaLoading(true);

    const name = mpesaName;
    const email = mpesaEmail;
    const amount = Number(mpesaAmount);

    if (!name || !email || !amount) {
      toast.warn("Please fill in all fields.");
      setMpesaLoading(false);
      return;
    }

    const handler = (window as any).PaystackPop.setup({
      key: "pk_live_0be5eac2f6a0b738a406fef0b55a4b5cdc350426", // Replace with your key
      email,
      amount: amount * 100,
      currency: currency || "KES",
      ref: "" + Math.floor(Math.random() * 1000000000 + 1),
      metadata: {
        custom_fields: [
          {
            display_name: "Name",
            variable_name: "name",
            value: name,
          },
        ],
      },
      callback: function (response: any) {
        toast.success("Payment successful! Ref: " + response.reference);
        setMpesaLoading(false);
      },
      onClose: function () {
        toast.info("Payment window closed.");
        setMpesaLoading(false);
      },
    });

    handler.openIframe();
  };

  return (
    <div className="max-w-3xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold text-primary mb-4">Make a Payment</h1>

      {selectedTier && (
        <p className="mb-4">
          Selected package:{" "}
          <strong className="capitalize">{selectedTier}</strong>{" "}
          {cardAmount ? `— ${cardAmount} ${currency}` : null}
        </p>
      )}

      <p className="text-red-600 font-bold mb-6">
        ⚠️ Please note: Due to the nature of our business, payment is 100%
        upfront.
      </p>

      <p className="text-sm text-gray-600 mb-6">
        All services and software provided by Sifabira Africa are intended
        strictly for lawful, authorized, and consent-based use only. Users are
        solely responsible for complying with local privacy and cybercrime laws.
      </p>

      {/* Payment Method Selection */}
      <div className="mb-6">
        <label className="block text-lg font-semibold mb-2">
          Choose Payment Method:
        </label>
        <div className="flex gap-6">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="method"
              value="mpesa"
              checked={method === "mpesa"}
              onChange={() => setMethod("mpesa")}
            />
            M-Pesa Express
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="method"
              value="card"
              checked={method === "card"}
              onChange={() => setMethod("card")}
            />
            Visa / Mastercard
          </label>
        </div>
      </div>

      {method === "mpesa" && (
        <form
          onSubmit={handleMpesaPayment}
          className="bg-white shadow rounded p-6 mb-6"
        >
          <h3 className="text-xl font-semibold mb-4 text-center text-primary">
            Pay via M-Pesa Express
          </h3>

          <p className="text-sm text-gray-600 mb-4 text-center">
            After clicking the button below, select{" "}
            <strong>“Pay with M-Pesa”</strong> in the popup and enter your phone
            number to receive an STK Push.
          </p>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Name</label>
            <input
              id="mpesa-name"
              type="text"
              className="w-full border rounded p-2"
              placeholder="John Doe"
              required
              value={mpesaName}
              onChange={(e) => setMpesaName(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Email</label>
            <input
              id="mpesa-email"
              type="email"
              className="w-full border rounded p-2"
              placeholder="johndoe@gmail.com"
              required
              value={mpesaEmail}
              onChange={(e) => setMpesaEmail(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">
              Amount ({currency})
            </label>
            <input
              id="mpesa-amount"
              type="number"
              className="w-full border rounded p-2"
              placeholder="1000"
              required
              value={mpesaAmount}
              onChange={(e) =>
                setMpesaAmount(
                  e.target.value === "" ? "" : Number(e.target.value),
                )
              }
            />
          </div>

          <button
            type="submit"
            disabled={mpesaLoading}
            className={`bg-primary text-white py-2 px-6 rounded transition ${
              mpesaLoading
                ? "opacity-60 cursor-not-allowed"
                : "hover:bg-primary-dark"
            } flex items-center justify-center gap-2 mx-auto`}
          >
            {mpesaLoading ? "Processing..." : "Pay Now via M-Pesa"}
          </button>
        </form>
      )}

      {method === "card" && (
        <form
          className="bg-white shadow rounded p-6 mb-6"
          onSubmit={handleCardPayment}
        >
          <div className="mb-4">
            <label className="block mb-1 font-medium">Name</label>
            <input
              id="name"
              type="text"
              className="w-full border rounded p-2"
              placeholder="Your full name"
              required
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Email</label>
            <input
              id="email"
              type="email"
              className="w-full border rounded p-2"
              placeholder="you@example.com"
              required
              value={cardEmail}
              onChange={(e) => setCardEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-medium">
              Amount ({currency})
            </label>
            <input
              id="amount"
              type="number"
              className="w-full border rounded p-2"
              placeholder="1000"
              required
              value={cardAmount}
              onChange={(e) =>
                setCardAmount(
                  e.target.value === "" ? "" : Number(e.target.value),
                )
              }
            />
          </div>

          <button
            type="submit"
            disabled={cardLoading}
            className={`bg-primary text-white py-2 px-6 rounded transition ${
              cardLoading
                ? "opacity-60 cursor-not-allowed"
                : "hover:bg-primary-dark"
            } flex items-center justify-center gap-2 mx-auto`}
          >
            <FaCreditCard />
            {cardLoading ? "Processing..." : "Pay Now"}
          </button>
        </form>
      )}
    </div>
  );
};

export default PaymentPage;
