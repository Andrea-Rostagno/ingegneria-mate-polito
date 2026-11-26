---
tipo: competenza
area: analisi
corsi: [Analisi 1, Metodi numerici, Istituzioni topologia]
livello: [triennale]
aliases: ["intermediate zero theorem", "Bolzano's theorem", "teorema di Bolzano", "metodo di bisezione", "bisection method"]
tags: [competenza, area/analisi]
---

# Teorema degli zeri

> Una funzione continua su $[a,b]$ che agli estremi assume valori di segno opposto si annulla almeno una volta in $(a,b)$.

## Definizione / enunciato
**Teorema** (Mazzi, teor. 1.19; Morandotti, teor. 3.2.12 "Bolzano-0"). Sia $f$ continua su $[a,b]$. Se $f(a)f(b)<0$, esiste $\bar x\in[a,b]$ (in effetti in $(a,b)$) tale che $f(\bar x)=0$.

**Corollari.**
- (1.16) Se inoltre $f$ è strettamente monotona, lo zero è **unico**.
- (1.17) Se $f$ è continua su un intervallo $I$ qualunque di estremi $\alpha,\beta$ ed esistono $\lim_{x\to\alpha}f=\ell_1$, $\lim_{x\to\beta}f=\ell_2$ con $\ell_1\ell_2<0$, allora $f$ ha uno zero in $I$.
- (lezione del 27/10/2021) Se $f,g\in C^0([a,b])$ con $f(a)<g(a)$ e $f(b)>g(b)$ (o viceversa), esiste $x_0\in(a,b)$ con $f(x_0)=g(x_0)$: si applica il teorema a $h=f-g$.

## Formule chiave
**Bisezione** (dimostrazione): $c_n=\frac{a_n+b_n}2$; si sceglie la metà in cui $f$ cambia segno, con
$$f(a_n)<0<f(b_n),\qquad b_n-a_n=\frac{b-a}{2^n}.$$
$a_n$ crescente e $b_n$ decrescente convergono allo stesso $\bar x$ e per continuità $f(\bar x)=0$.

## Intuizione
Un grafico continuo che parte sotto l'asse e arriva sopra deve attraversarlo. La dimostrazione è anche un algoritmo: dopo $n$ passi lo zero è noto a meno di $(b-a)/2^n$.

## Come si usa
Per dimostrare che un'equazione ha soluzioni: si scrive come $h(x)=0$ e si trovano due punti con segni opposti. Lezione del 27/10/2021: $\cos x=x$ ha una soluzione in $(0,1)$ perché $f(0)=1>0=g(0)$ e $f(1)=\cos1<1=g(1)$. Morandotti lo applica a $e^x+x^3$. La continuità e la chiusura dell'intervallo sono essenziali.

## Nei corsi
- **Analisi 1** (triennale): "teoremi globali sulle funzioni continue: esistenza degli zeri", con dimostrazione. Fonti: `triennale/ANNO 1/analisi 1/Dispense/Dispense Mazzi/0.Limiti-totale.pdf` (§1.15.2, teor. 1.19, cor. 1.16-1.17, pp. 52-54); `triennale/ANNO 1/analisi 1/Dispense/Dispense Morandotti - AM1 (33955823).pdf` (teor. 3.2.12, PDF p. 99); `triennale/ANNO 1/analisi 1/Lezioni 2021-22 (manoscritte)/Lezione 2021-10-27.pdf` (p. 1, corollario e esempio $\cos x=x$).
- **Metodi numerici** (triennale): il teorema serve a localizzare una radice e diventa il **metodo di bisezione** (L. Scuderi). Partendo da $(a_0,b_0)$ con $f(a_0)<0<f(b_0)$ si calcola $m_n=\frac{a_{n-1}+b_{n-1}}2$ e si pone $(a_n,b_n)=(m_n,b_{n-1})$ se $f(m_n)<0$, $(a_{n-1},m_n)$ se $f(m_n)>0$ ($\alpha=m_n$ se $f(m_n)=0$). Stima: $|\alpha-m_{n+1}|<\frac{b_n-a_n}2=\frac{b_0-a_0}{2^{n+1}}$; convergenza garantita ma solo lineare ($|\alpha-m_{n+1}|/|\alpha-m_n|\approx1/2$). Osservazioni delle slide: non garantisce la riduzione progressiva dell'errore (con il solo criterio sull'ampiezza si possono scartare buone approssimazioni); usa solo i segni di $f$, quindi non converge in un passo neppure se $f$ è lineare (salvo intervallo simmetrico rispetto alla radice); si usa per inizializzare metodi più rapidi. Esempio: $x^4-4=0$ da $a_0=1$, $b_0=2.5$. Fonti: `triennale/ANNO 2/metodi numerici/CN_MAT_04_sistemi_non_lineari_print.pdf` (p. 9-14).
- **Istituzioni topologia** (triennale; materiale della cartella ANNO 3/istituzioni): generalizzazione topologica (Teor. 6.11). Se $f:(X,\tau)\to(\mathbb R,\mathcal E_1)$ è continua, $E\subseteq X$ è connesso e $f(p_1)<0<f(p_2)$ con $p_1,p_2\in E$, esiste $p_0\in E$ con $f(p_0)=0$. Altrimenti $\{f<0\}\cap E$ e $\{f>0\}\cap E$ sconnetterebbero $E$. Si usa per esempio per mostrare che non c'è un arco in $GL_n(\mathbb R)$ fra una matrice con $\det>0$ e una con $\det<0$ (Es. 6.25). Fonti: `triennale/ANNO 3/istituzioni/topologia/Appunti di Topologia (Ferrarotti).pdf` (pp. 46, 50).

## Prerequisiti
- [[Funzione continua]]: ipotesi essenziale
- [[Teorema sulle successioni monotone]]: gli estremi di bisezione convergono
- [[Spazio connesso]]: nella versione topologica il dominio è un connesso (Istituzioni topologia)

## Porta a
- [[Teorema dei valori intermedi]]: si applica a f-y

## Collegati
- [[Metodo di Newton]]: la bisezione fornisce il punto iniziale per un metodo più rapido (Metodi numerici)
- [[Ordine di convergenza di un metodo iterativo]]: la bisezione converge con ordine 1 (Metodi numerici)
