package main;
import javafx.scene.image.ImageView;
import javafx.scene.layout.Pane;

/**
 * 背景图片面板
 *
 * @author WangSong
 *
 */
public class BackgroundPane extends Pane {

    /**
     * 无参构造方法
     */
    public BackgroundPane() {
        paint();
    }

    /**
     * 打印面板
     */
    public void paint() {
        ImageView imageView = new ImageView("https://s1.ax1x.com/2020/06/23/NNhalT.th.jpg");// 加载网络图片资源
        imageView.fitHeightProperty().bind(heightProperty());
        imageView.fitWidthProperty().bind(widthProperty());
        getChildren().add(imageView);
    }
}
