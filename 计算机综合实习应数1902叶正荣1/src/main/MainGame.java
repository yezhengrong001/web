package main;
import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.image.Image;
import javafx.stage.Stage;

/**
 * 迷宫程序
 *
 * @author WangSong
 *
 */
public class MainGame extends Application {
    public static void main(String[] args) {
        launch(args);
    }

    @Override
    public void start(Stage primaryStage) throws Exception {
        TotalPane pane = new TotalPane();
        Scene scene = new Scene(pane, 1300, 700);
        Image ico = new Image("https://s1.ax1x.com/2020/06/23/NUSDFx.png");// 图标的缩略图
        primaryStage.getIcons().add(ico);
        primaryStage.setTitle("MazeDemo");
        primaryStage.setScene(scene);
        primaryStage.show();

        primaryStage.setResizable(false);
    }
}
