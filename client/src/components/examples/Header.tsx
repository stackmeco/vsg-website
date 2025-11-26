import Header from "../Header";

export default function HeaderExample() {
  return (
    <div className="bg-background min-h-[200px]">
      <Header />
      <div className="pt-20 px-4">
        <p className="text-muted-foreground">Page content would go here...</p>
      </div>
    </div>
  );
}
