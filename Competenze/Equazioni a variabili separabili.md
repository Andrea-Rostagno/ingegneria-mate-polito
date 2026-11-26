---
tipo: competenza
area: analisi
corsi: [Analisi 1]
livello: [triennale]
aliases: ["separable differential equations", "EDO a variabili separabili"]
tags: [competenza, area/analisi]
---

# Equazioni a variabili separabili

> Equazioni del tipo $u'=a(t)\,b(u)$: si separano le variabili, $\frac{du}{b(u)}=a(t)\,dt$, si integrano entrambi i membri e si inverte.

## Definizione / enunciato
Siano $I,J$ intervalli aperti, $a:I\to\mathbb R$ e $b:J\to\mathbb R$ continue (Lussardi).
- **Teor. 5.1.3 (esistenza e unicità locali).** Per ogni $t_0\in I$, $u_0\in J$ esiste una soluzione di $u'=a(t)b(u)$, $u(t_0)=u_0$ definita in un intorno di $t_0$; se inoltre $b\in C^1(J)$ due soluzioni coincidono dove sono entrambe definite.
- **Soluzioni costanti**: se $b(u_0)=0$, $u(t)\equiv u_0$ è soluzione (soluzione di equilibrio).
- **Teor. 5.1.4 (formula risolutiva).** Sia $E=\{x\in J:b(x)\ne0\}$. Una funzione continua $u:\tilde I\to E$ è soluzione se e solo se esiste $c\in\mathbb R$ con
$$B(u(t))=A(t)+c\qquad\forall t\in\tilde I,$$
dove $B$ è una primitiva di $1/b$ su $E$ e $A$ una primitiva di $a$; quindi $u(t)=B^{-1}(A(t)+c)$.

## Formule chiave
$$\frac{u'(t)}{b(u(t))}=a(t)\ \Rightarrow\ (B\circ u)'=a\ \Rightarrow\ B(u(t))=A(t)+c$$
Morandotti (6.10)-(6.13): $y'=g(x)h(y)$, $H(y(x))=G(x)+c$, $y(x)=H^{-1}(G(x)+c)$.

## Intuizione
La regola mnemonica "$dy/h(y)=g(x)dx$" è giustificata dalla regola della catena: $\frac d{dt}B(u(t))=\frac{u'(t)}{b(u(t))}$. Le soluzioni non costanti non possono attraversare quelle costanti (per l'unicità), quindi $b(u(t))\ne0$ lungo di esse.

## Come si usa
Procedura: (1) si trovano le soluzioni costanti ($b(u)=0$); (2) per le altre si divide per $b(u)$, si integra, si esplicita $u$; (3) si impone la condizione iniziale e si determina l'intervallo di esistenza. Lezione del 10/01/2022: il caso omogeneo lineare $y'=a(x)y$ ha la soluzione costante $y=0$; per le altre $y\ne0$ e $\frac{y'}y=a(x)$, cioè $\log|y(x)|=A(x)+c$. Esercizi tipo: esercitazione 26 (2021-22, "EDO del I ordine").

## Nei corsi
- **Analisi 1** (triennale): "equazioni differenziali del primo ordine a variabili separabili; esistenza e unicità; metodo risolutivo". Fonti: `triennale/ANNO 1/analisi 1/Dispense/Dispensa Lussardi.pdf` (teor. 5.1.3-5.1.4, pp. 84-85); `triennale/ANNO 1/analisi 1/Dispense/Dispense Morandotti - AM1 (33955823).pdf` (§6.1.1, PDF pp. 236-238); `triennale/ANNO 1/analisi 1/Lezioni 2021-22 (manoscritte)/Lezione 2022-01-10.pdf` (p. 1).

## Prerequisiti
- [[Problema di Cauchy]]: esistenza e unicità locali
- [[Primitive delle funzioni elementari]]: si integrano entrambi i membri
- [[Funzione composta e funzione inversa]]: si inverte B

## Porta a
- [[Cinetica del primo ordine]]: si separano le variabili e si integra
- [[Cinetiche di ordine zero e del secondo ordine]]: integrazione di -d[A]/[A]^2 = k dt

## Collegati
- [[Equazioni differenziali lineari del primo ordine]]: il caso omogeneo è separabile
