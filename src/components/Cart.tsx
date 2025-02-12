import  { useState } from 'react';
import { ShoppingCart, X, Send, MapPin } from 'lucide-react';
import { CartItem, DeliveryInfo } from '../types';

interface CartProps {
  items: CartItem[];
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemoveItem: (id: string) => void;
  onSubmitOrder: (deliveryInfo: DeliveryInfo) => void;
  isOpen: boolean;
  onClose: () => void;
}

export function Cart({
  items,
  onUpdateQuantity,
  onRemoveItem,
  onSubmitOrder,
  isOpen,
  onClose,
}: CartProps) {
  const [deliveryInfo, setDeliveryInfo] = useState<DeliveryInfo>({
    address: '',
    additionalDetails: ''
  });
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (!deliveryInfo.address.trim()) {
      alert('Por favor, ingresa una dirección de entrega');
      return;
    }
    onSubmitOrder(deliveryInfo);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
      <div className="bg-white w-full max-w-md h-full p-6 flex flex-col">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <ShoppingCart /> Carrito
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <p className="text-gray-500 text-center">El carrito está vacío</p>
          ) : (
            <>
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 py-4 border-b"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-green-600">${item.price.toFixed(2)}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() =>
                          onUpdateQuantity(item.id, Math.max(0, item.quantity - 1))
                        }
                        className="px-2 py-1 bg-gray-100 rounded"
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() =>
                          onUpdateQuantity(item.id, item.quantity + 1)
                        }
                        className="px-2 py-1 bg-gray-100 rounded"
                      >
                        +
                      </button>
                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="ml-auto text-red-500"
                      >
                        <X size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              <div className="mt-6 border-t pt-6">
                <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
                  <MapPin /> Información de entrega
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Dirección de entrega *
                    </label>
                    <input
                      type="text"
                      value={deliveryInfo.address}
                      onChange={(e) => setDeliveryInfo(prev => ({
                        ...prev,
                        address: e.target.value
                      }))}
                      placeholder="Calle, número, colonia..."
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Detalles adicionales
                    </label>
                    <textarea
                      value={deliveryInfo.additionalDetails}
                      onChange={(e) => setDeliveryInfo(prev => ({
                        ...prev,
                        additionalDetails: e.target.value
                      }))}
                      placeholder="Referencias, instrucciones especiales..."
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 h-24"
                    />
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        <div className="mt-6 pt-6 border-t">
          <div className="flex justify-between text-xl font-semibold mb-4">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <button
            onClick={handleSubmit}
            disabled={items.length === 0}
            className="w-full bg-green-500 text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send size={20} />
            Enviar Pedido por WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}