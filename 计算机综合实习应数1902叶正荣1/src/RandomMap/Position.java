package RandomMap;

import java.util.LinkedList;

public class Position {

    private int x, y;

    public Position(int x, int y){
        this.x = x;
        this.y = y;
    }

    public int getX(){return x;}
    public int getY(){return y;}

    public static class RandomQueue<E>{

        private LinkedList<E> queue;

        public RandomQueue(){
            queue = new LinkedList<E>();
        }

        public void add(E e){
            if(Math.random() < 0.5)
                queue.addFirst(e);
            else
                queue.addLast(e);
        }

        public E remove(){
            if(queue.size() == 0)
                throw new IllegalArgumentException("There's no element to remove in Random Qeuue");


            if(Math.random() < 0.5)
                return queue.removeFirst();
            else
                return queue.removeLast();
        }

        public int size(){
            return queue.size();
        }

        public boolean empty(){
            return size() == 0;
        }
    }
}
