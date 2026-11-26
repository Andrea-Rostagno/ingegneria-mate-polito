---
tipo: competenza
area: analisi
corsi: [Analisi 1, Istituzioni algebra]
livello: [triennale]
aliases: ["composite function", "inverse function", "composizione", "funzione invertibile"]
tags: [competenza, area/analisi]
---

# Funzione composta e funzione inversa

> Comporre $f$ e $g$ significa applicare prima $f$ e poi $g$; invertire una funzione iniettiva significa risalire dal valore al punto: il grafico dell'inversa è il simmetrico rispetto a $y=x$.

## Definizione / enunciato
**Composta** (Mazzi, def. 1.6). Date $f:A\to B$ e $g:C\subseteq B\to D$, la composta è $(g\circ f)(x)=g(f(x))$ con
$$\operatorname{dom}(g\circ f)=\{x\in A:\ f(x)\in\operatorname{dom}g\}=A\cap f^{-1}(C).$$
In generale $g\circ f\ne f\circ g$.

**Inversa** (def. 1.7). Se $f:A\to B$ è iniettiva, la funzione inversa è $f^{-1}:\operatorname{im}f\to A$, $f(x)\mapsto x$. Valgono $\operatorname{dom}f^{-1}=\operatorname{im}f$, $\operatorname{im}f^{-1}=\operatorname{dom}f$, $f^{-1}\circ f=\mathrm{id}_A$, $f\circ f^{-1}=\mathrm{id}_{\operatorname{im}f}$, e $\Gamma(f^{-1})=\{(f(x),x)\}$.

Se $f$ e $g$ sono biunivoche, $g\circ f$ lo è e $(g\circ f)^{-1}=f^{-1}\circ g^{-1}$ (prop. 1.2).

## Formule chiave
$$(g\circ f)(x)=g(f(x)),\qquad f^{-1}(f(x))=x,\qquad (g\circ f)^{-1}=f^{-1}\circ g^{-1}$$

## Intuizione
Il dominio della composta si restringe ai punti in cui l'uscita di $f$ è un ingresso ammesso per $g$. L'inversa esiste solo se $f$ non "perde informazione" (iniettività).

## Come si usa
Esempio di Mazzi: $f(x)=x+1$, $g(x)=\sqrt x$; $g\circ f(x)=\sqrt{x+1}$ ha dominio $[-1,+\infty)$, mentre $f\circ g(x)=\sqrt x+1$ ha dominio $[0,+\infty)$. Esempi di inverse: $\exp$ e $\log$ ($\log e^x=x$ su $\mathbb R$, $e^{\log x}=x$ su $(0,+\infty)$); $x^3$ e $\sqrt[3]x$; in generale $x^{2k+1}$ e $\sqrt[2k+1]{x}$. Esercizi tipo: esercitazione 4 (2022-23, "funzioni composte e inverse").

## Nei corsi
- **Analisi 1** (triennale): "funzioni composte e inverse". Fonti: `triennale/ANNO 1/analisi 1/Dispense/Dispense Mazzi/Capitolo Funzioni.pdf` (§1.2, def. 1.6-1.7, oss. 1.2, prop. 1.2, es. 1.4, pp. 5-7); `triennale/ANNO 1/analisi 1/Esercitazioni 2022-23 (con svolti)/Esercitazione_04.pdf`.
- **Istituzioni algebra** (triennale): composizione, identità $id_X$, inversa e la sua unicità, ed equivalenza tra biiettività e invertibilità, date per note. Il corso aggiunge le inverse destra e sinistra, e osserva che le biiezioni $\mathcal B(X)$ formano un gruppo non abeliano con la composizione. Fonti: `triennale/ANNO 2/istituzioni/Alg-28-09-22.pdf` (lezione 1-2, pp. 5-8); `triennale/ANNO 2/istituzioni/Alg-05-10-22.pdf` (lezioni 4-5, p. 6).

## Prerequisiti
- [[Funzioni iniettive e suriettive]]: l'inversa esiste solo per le iniettive

## Porta a
- [[Inversa destra e inversa sinistra]]: inverse unilatere, caratterizzano iniettività e suriettività
- [[Gruppo]]: le biiezioni di un insieme formano un gruppo con la composizione
- [[Funzioni pari, dispari e periodiche]]: parità della composta
- [[Funzioni trigonometriche inverse]]: inverse di restrizioni
- [[Trasformazioni del grafico]]: composizione con traslazioni e dilatazioni
- [[Sottosuccessione]]: a_{n_k} è una composta
- [[Limite della funzione composta]]: dominio della composta
- [[Continuità della funzione inversa]]: definizione di inversa
- [[Equazioni a variabili separabili]]: si inverte B

## Collegati
- Nessuno.
