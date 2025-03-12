function RankCard({ title, imageUrl }: RankCardProps) {
    return (
        <div className="card px-4">
            {imageUrl ? (
                <img
                    className="card-img-top w-75 mx-auto mt-4"
                    src={imageUrl}
                    alt={title}
                    key={imageUrl} // 🔥 Forzar recarga en React
                    style={{ display: "none", height: "auto" }} // 💡 Ajuste CSS
                />
            ) : (
                <p>Cargando imagen...</p>
            )}

            <div className="card-body">
                <h4 className="card-title text-center">{title || "Sin nombre"}</h4>
            </div>
        </div>
    );
};
export default RankCard;