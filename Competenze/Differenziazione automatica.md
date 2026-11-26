---
tipo: competenza
area: numerica
corsi: [Numerical opt, Data science lab]
livello: [magistrale]
aliases: ["automatic differentiation", "AD", "algorithmic differentiation", "forward mode AD", "reverse mode AD", "modalità forward", "modalità reverse", "computational graph", "grafo computazionale"]
tags: [competenza, area/numerica]
---

# Differenziazione automatica

> Calcolo delle derivate di una funzione scritta come programma, scomponendola in operazioni elementari di cui si conosce la derivata e applicando la regola della catena lungo il grafo computazionale, in avanti (forward) o all'indietro (reverse).

## Definizione / enunciato
La funzione si rappresenta come grafo: nodi di input $y_i=x_i$ ($i=1,\dots,n$), variabili intermedie $y_i$ ($i>n$) ottenute con un'operazione elementare dai genitori, output $z$. La derivata complessiva si ottiene con la regola della catena $\frac{d}{dx}f(g(x))=f'(g(x))\,g'(x)$.
- **Forward mode.** Fissata una variabile di input $x_j$, si propaga $\dot y_i:=\partial y_i/\partial x_j$ dagli input verso l'output.
- **Reverse mode.** Si propaga l'aggiunto $\bar y_i:=\partial z/\partial y_i$ dall'output verso gli input, con seme $\bar z=1$.

## Formule chiave
Forward:
$$\dot y_i=\delta_{ij}\ (i=1,\dots,n),\qquad \dot y_i=\sum_{y_k\ \text{genitore di}\ y_i}\frac{\partial y_i}{\partial y_k}\,\dot y_k\ (i>n).$$
Reverse:
$$\bar z=1,\qquad \bar y_i=\sum_{y_k\ \text{figlio di}\ y_i}\frac{\partial y_k}{\partial y_i}\,\bar y_k,\qquad \bar y_i=\frac{\partial z}{\partial x_i}\ (i=1,\dots,n).$$
Per $L:\mathbb R^n\to\mathbb R^m$: la jacobiana richiede $n$ passate forward (seme $e_j$, esce la colonna $j$) oppure $m$ passate reverse (seme $e_j\in\mathbb R^m$, esce la riga $j$).

## Intuizione
In entrambe le modalità si valuta prima la funzione e si memorizzano i valori intermedi. Il forward costa una passata per ogni input; il reverse costa una passata per ogni output. Per una loss scalare con molti parametri basta quindi una passata reverse per l'intero gradiente: è il motivo per cui la backpropagation delle reti neurali è reverse mode AD.

## Come si usa
Esempio della dispensa: $\varphi(x_1,x_2)=\log x_1+x_1x_2-\log(\sin x_2)$, scomposta in
- $y_3=\log y_1$, $y_4=y_1y_2$, $y_5=\sin y_2$;
- $y_6=y_3+y_4$, $y_7=\log y_5$, $y_8=y_6-y_7$, $z=y_8$.

In forward, con seme $e_j$, si propaga ad esempio $\dot y_4=y_2\dot y_1+y_1\dot y_2$ e $\dot y_5=\cos y_2\,\dot y_2$. In reverse una sola passata dà entrambe le derivate parziali, per esempio $\bar y_1=\frac{1}{y_1}\bar y_3+y_2\bar y_4$. In Matlab si usano `dlarray`, `dlgradient` e `dlfeval` del Deep Learning Toolbox.

## Nei corsi
- **Numerical opt** (magistrale): ultimo laboratorio di F. Della Santa, con la storia (forward negli anni '60, reverse di Linnainmaa negli anni '70, riscoperta come backpropagation). Fonti: `magistrale/Numerical opt/DellaSanta/NO4LSP_DellaSanta_2526.pdf` (§12.1-12.4, fig. 5-7); codice d'esempio `DellaSanta/labs/ad_grad_func.m`, `ad_implementation_test.m`.
- **Data science lab** (magistrale): **grafo computazionale** = grafo orientato in cui ogni nodo è un'operazione e ogni arco un flusso di dati (esempio $y=wx+q$: prima la variabile intermedia $a=wx$, poi $y=a+q$; nel testo della slide la terza variabile è chiamata a tratti $y$ e l'uscita $z$, la figura usa $q$ e $y$); il passo forward calcola la loss dagli input, quello backward applica la regola della catena dalla fine ([[Backpropagation]]). In PyTorch (**autograd**) il grafo si costruisce per i tensori con `requires_grad=True`, `.backward()` propaga i gradienti, `.grad` li contiene e si **accumulano** se si fanno più backward (da cui `optimizer.zero_grad()`); esempio $y=x^2$ in $x=3$: `x.grad` $=6$; il grafo si visualizza con `torchviz.make_dot`. Fonti: `magistrale/Data science lab/slide testo/DSML-Deep-Learning-Intro.pdf` (p. 20-24); `slide py/11-PyTorch.pdf` (p. 4-7). Vedi [[Ciclo di addestramento in PyTorch]].

## Prerequisiti
- [[Matrice jacobiana]]: AD la calcola per colonne (forward) o per righe (reverse)

## Porta a
- [[Metodo del gradiente]]: fornisce il gradiente esatto per i metodi di discesa

## Collegati
- [[Backpropagation]]: è la modalità reverse applicata alla loss di una rete neurale
- [[Gradiente e hessiana alle differenze finite]]: alternativa approssimata, che dipende dalla scelta di $h$
