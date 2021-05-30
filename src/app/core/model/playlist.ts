export interface IPlaylist {
    id: string;
    name: string;
    public: boolean;
    description: string;
}



export interface IPlaylistsSource {
    getPlaylists(): IPlaylist[]
}