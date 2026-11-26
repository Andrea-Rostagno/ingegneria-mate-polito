---
tipo: competenza
area: analisi
corsi: [Analisi 1]
livello: [triennale]
aliases: ["first-order linear differential equations", "formula risolutiva", "fattore integrante"]
tags: [competenza, area/analisi]
---

# Equazioni differenziali lineari del primo ordine

> L'equazione $u'=a(t)u+b(t)$ con $a,b$ continue ha integrale generale $u(t)=e^{A(t)}\big(c+B(t)\big)$ e ogni problema di Cauchy ha una e una sola soluzione su tutto l'intervallo.

## Definizione / enunciato
**Teorema 5.1.2** (Lussardi). Sia $I$ un intervallo aperto e $a,b:I\to\mathbb R$ continue. L'integrale generale di
$$u'(t)=a(t)u(t)+b(t)$$
è
$$u(t)=e^{A(t)}\big(c+B(t)\big),\qquad c\in\mathbb R,$$
dove $A$ è una primitiva di $a$ e $B$ una primitiva di $b\,e^{-A}$. Per ogni $t_0\in I$, $u_0\in\mathbb R$ il problema di Cauchy con $u(t_0)=u_0$ ha una e una sola soluzione definita su tutto $I$, con $c=u_0e^{-A(t_0)}-B(t_0)$.

## Formule chiave
$$u(t)=e^{A(t)}\left(c+\int b(t)e^{-A(t)}dt\right),\qquad A'=a$$
Dimostrazione: posto $v=ue^{-A}$, $v'=(u'-au)e^{-A}=be^{-A}$, quindi $v=c+B$.

## Intuizione
Moltiplicare per il "fattore integrante" $e^{-A(t)}$ trasforma il primo membro nella derivata di un prodotto. La soluzione è la somma della soluzione generale dell'omogenea ($ce^{A(t)}$) e di una particolare ($e^{A}B$).

## Come si usa
Si individua $a(t)$ (attenzione al segno: $u'+p(t)u=q(t)$ ha $a=-p$), si calcolano $A$ e $B$, si impone il dato iniziale. Il termine $b$ è il "termine forzante" o noto (lezione del 10/01/2022), e il caso $b=0$ (omogeneo) è anche separabile. Esercizi tipo: esercitazione 26 (2021-22, "EDO del I ordine") e relativo svolgimento.

## Nei corsi
- **Analisi 1** (triennale): "equazioni differenziali lineari del primo ordine; formula risolutiva; esistenza e unicità del problema di Cauchy". Fonti: `triennale/ANNO 1/analisi 1/Dispense/Dispensa Lussardi.pdf` (teor. 5.1.2, pp. 83-84); `triennale/ANNO 1/analisi 1/Dispense/Dispense Morandotti - AM1 (33955823).pdf` (§6.1.3, PDF p. 242 e segg.); `triennale/ANNO 1/analisi 1/Lezioni 2021-22 (manoscritte)/Lezione 2022-01-10.pdf` (p. 1).

## Prerequisiti
- [[Problema di Cauchy]]: unicità della soluzione
- [[Primitive delle funzioni elementari]]: A e B sono primitive
- [[Regole di derivazione]]: verifica della formula

## Porta a
- [[Circuito RL]]: i(t) risolve un'equazione lineare del primo ordine
- [[Circuito RC]]: q(t) risolve un'equazione lineare del primo ordine

## Collegati
- [[Equazioni a variabili separabili]]: il caso omogeneo è separabile
- [[Equazioni lineari del secondo ordine a coefficienti costanti]]: stessa struttura omogenea + particolare
