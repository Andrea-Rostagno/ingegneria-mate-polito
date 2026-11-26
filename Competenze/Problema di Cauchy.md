---
tipo: competenza
area: analisi
corsi: [Analisi 1, Metodi numerici, Equazioni di fisica matematica]
livello: [triennale]
aliases: ["Cauchy problem", "initial value problem", "equazione differenziale ordinaria", "integrale generale", "soluzione di un'equazione differenziale", "problema a valori iniziali", "forma canonica del problema di Cauchy", "riduzione a sistema del primo ordine", "sistema autonomo", "sistema non autonomo"]
tags: [competenza, area/analisi]
---

# Problema di Cauchy

> Un'equazione differenziale con una condizione iniziale (due per il secondo ordine): si cerca la soluzione che passa per un punto assegnato.

## Definizione / enunciato
**Equazione del primo ordine** (Lussardi, def. 5.1.1). Data $f:A\subseteq\mathbb R\times\mathbb R\to\mathbb R$, una funzione $u:E\to\mathbb R$ è **soluzione** di $u'(t)=f(t,u(t))$ se è derivabile e per ogni $t\in E$ si ha $(t,u(t))\in A$ e $u'(t)=f(t,u(t))$. L'insieme di tutte le soluzioni è l'**integrale generale**. Il **problema di Cauchy**
$$\begin{cases}u'(t)=f(t,u(t))\\u(t_0)=u_0\end{cases}$$
chiede una soluzione con $u(t_0)=u_0$.

**Secondo ordine** (def. 5.2.1): $u''(t)=f(t,u(t),u'(t))$ con le condizioni $u(t_0)=u_0$, $u'(t_0)=u_1$.

Morandotti (def. 6.0.3) definisce la soluzione come coppia $(\varphi,I)$ con $I$ **intervallo**: il programma parla di "soluzione su un intervallo".

**Esistenza e unicità** (dal corso, per le classi studiate): lineari del primo ordine con $a,b$ continue; variabili separabili $u'=a(t)b(u)$ con $a$ continua e $b$ di classe $C^1$; lineari del secondo ordine a coefficienti costanti. Il caso generale è il teorema di Picard-Lindelöf (Morandotti, teor. 6.2.17), oltre il programma.

## Formule chiave
$$\text{integrale generale}\ \xrightarrow{\ u(t_0)=u_0\ }\ \text{una costante fissata}\ \Rightarrow\ \text{soluzione del problema di Cauchy}$$

## Intuizione
L'equazione dà la pendenza in ogni punto; il dato iniziale sceglie da quale punto partire. Senza ipotesi di regolarità l'unicità può fallire.

## Come si usa
Si trova l'integrale generale (con una o due costanti) e si impongono le condizioni iniziali; si precisa l'intervallo massimale su cui la soluzione è definita. Lezione del 10/01/2022: per la lineare $y'=a(x)y+b(x)$ con $a,b$ continue le ipotesi del teorema di Cauchy valgono ovunque, quindi le soluzioni non si intersecano. Esercizi tipo: esercitazioni 26-27 (2021-22).

## Nei corsi
- **Analisi 1** (triennale): "definizione di soluzione su un intervallo e di integrale generale; teorema di esistenza e unicità della soluzione del problema di Cauchy". Fonti: `triennale/ANNO 1/analisi 1/Dispense/Dispensa Lussardi.pdf` (def. 5.1.1, 5.2.1, pp. 83-86); `triennale/ANNO 1/analisi 1/Dispense/Dispense Morandotti - AM1 (33955823).pdf` (def. 6.0.1-6.0.4, PDF pp. 230-233; teor. 6.2.17, PDF p. 285); `triennale/ANNO 1/analisi 1/Lezioni 2021-22 (manoscritte)/Lezione 2022-01-10.pdf` (p. 1). La dispensa Mazzi `1_equazioni differenziali.pdf` è una scansione non trascritta.
- **Metodi numerici** (triennale, L. Scuderi, a.a. 2022/23): "problema a valori iniziali" per sistemi di $m$ equazioni, scritto nella **forma canonica** $\mathbf y'(x)=\mathbf f(x,\mathbf y(x))$, $\mathbf y(a)=\mathbf y_0$. Un'equazione di ordine $m$ $y^{(m)}=f(x,y,\dots,y^{(m-1)})$ si riduce a un sistema del primo ordine ponendo $z_1=y,\ z_2=y',\dots$; esempio: $y''-3y'+2y=0$, $y(0)=y'(0)=1$ diventa $z_1'=z_2$, $z_2'=3z_2-2z_1$, $\mathbf z_0=(1,1)^T$ (soluzione $e^x$). La riduzione è necessaria perché i metodi numerici (Eulero, Runge-Kutta, `ode45`) sono definiti solo per problemi del primo ordine in forma canonica. Fonti: `triennale/ANNO 2/metodi numerici/CN_MAT_07_ode_valori_iniziali_print.pdf` (p. 2-11, 139-140).
- **Equazioni di fisica matematica** (triennale): forma generale di un sistema di ODE $\frac{dx}{dt}=f(t,x)$, con $x:[0,+\infty)\to\mathbb R^n$ e $f:[0,+\infty)\times\mathbb R^n\to\mathbb R^n$; il sistema è **autonomo** se $f$ non dipende da $t$. Problema di Cauchy $\frac{dx}{dt}=f(t,x)$, $x(t_0)=x_0$, riscritto in **forma integrale** $x(t)=x_0+\int_{t_0}^tf(\tau,x(\tau))\,d\tau$. Esempi: Malthus, Verhulst, SIR. Anche per le PDE il corso chiama "problema di Cauchy" il problema con il solo dato iniziale. Fonti: `triennale/ANNO 3/eq fisica matematica/01 - Lezione 03_10_23 (2).pdf` (pp. 1-4); `triennale/ANNO 3/eq fisica matematica/02 - Lezione 04_10_23 (1).pdf` (pp. 1-3).

## Prerequisiti
- [[Derivata]]: la soluzione è derivabile
- [[Funzione continua]]: ipotesi sui coefficienti

## Porta a
- [[Equazioni a variabili separabili]]: esistenza e unicità locali
- [[Equazioni differenziali lineari del primo ordine]]: unicità della soluzione
- [[Equazioni lineari del secondo ordine a coefficienti costanti]]: due condizioni iniziali
- [[Modello di Verhulst]]: modello di popolazione come problema di Cauchy (Equazioni di fisica matematica)
- [[Modello SIR]]: sistema di tre ODE con dati iniziali (Equazioni di fisica matematica)
- [[Metodo delle caratteristiche]]: le caratteristiche risolvono un'ODE con dato iniziale (Equazioni di fisica matematica)

## Collegati
- [[Metodo di Eulero esplicito]]: primo metodo numerico per approssimarne la soluzione (Metodi numerici)
- [[Condizionamento dei problemi di Cauchy]]: sensibilità della soluzione al dato iniziale (Metodi numerici)
