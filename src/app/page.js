import { prisma } from "@/utils/prisma";

export default async function Home() {
  const products = await prisma.product.findMany({
    select: {
      id: true,
      name: true,
      price: true,
      userId: true,
      user: {
        select: {
          username: true,
        },
      },
      orders: {
        select: {
          id: true,
        },
      },
    },
  });

  return (
    <main className="max-w-2xl m-auto py-12 space-y-4">
      <div className="grid grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="space-y-4">
            <div className="w-full h-48 bg-slate-200 rounded-xl"></div>
            <div className="spacey-1">
              <div>{product.name}</div>
              <div>{product.price}</div>
              <div className="text-sm text-slate-500">
                {product.user.username}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
