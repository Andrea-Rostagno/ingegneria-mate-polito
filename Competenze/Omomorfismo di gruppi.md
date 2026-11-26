---
tipo: competenza
area: algebra-geometria
corsi: [Istituzioni algebra]
livello: [triennale]
aliases: ["group homomorphism", "morfismo di gruppi", "isomorfismo di gruppi", "group isomorphism", "automorfismo di un gruppo", "endomorfismo di un gruppo", "monomorfismo di gruppi", "epimorfismo di gruppi", "nucleo di un omomorfismo di gruppi", "gruppi isomorfi"]
tags: [competenza, area/algebra-geometria]
---

# Omomorfismo di gruppi

> Una funzione tra gruppi che rispetta l'operazione. Nucleo e immagine misurano quanto è lontana dall'essere iniettiva e suriettiva.

## Definizione / enunciato
**Def. 15.** $f:(G,\star)\to(H,*)$ è un **omomorfismo** se $f(x\star y)=f(x)*f(y)$ per ogni $x,y$. Si chiama:
- **monomorfismo** se è iniettivo;
- **epimorfismo** se è suriettivo;
- **isomorfismo** se è biiettivo, e allora $G\cong H$;
- **endomorfismo** se $G=H$;
- **automorfismo** se è un endomorfismo biiettivo.

**Prop. 16.** $f(1_G)=1_H$, $f(a^{-1})=f(a)^{-1}$, $f(a^n)=f(a)^n$ per ogni $n\in\mathbb Z$.

**Nucleo** (Def. 8): $\mathrm{Ker}f=\{x\in G\mid f(x)=1_{G'}\}=f^{-1}(1_{G'})$.

Risultati sui sottogruppi:
- l'immagine di un sottogruppo è un sottogruppo, in particolare $\mathrm{Im}f<G'$ (Prop. 5, Cor. 6);
- la retroimmagine di un sottogruppo è un sottogruppo, in particolare $\mathrm{Ker}f<G$ (Prop. 7, Cor. 9).

**Prop. 10.** $f$ è un epimorfismo $\iff\mathrm{Im}f=G'$; $f$ è un monomorfismo $\iff\mathrm{Ker}f=\{1_G\}$.

## Formule chiave
$$f(xy)=f(x)f(y),\qquad f\ \text{iniettiva}\iff\mathrm{Ker}f=\{1_G\}$$

## Intuizione
Un omomorfismo "trasporta" la tabella di moltiplicazione. Basta controllare il nucleo per l'iniettività: se $f(x)=f(y)$ allora $f(xy^{-1})=1$, cioè $xy^{-1}\in\mathrm{Ker}f$.

## Come si usa
Esempi delle lezioni:
- **determinante:** $\det:GL(n,\mathbb R)\to\mathbb R^*$ è un omomorfismo per il teorema di Binet. È suriettivo, perché $\det\mathrm{diag}(a,1,\dots,1)=a$, e non iniettivo.
- **logaritmo:** $\ln:(\mathbb R_{>0},\cdot)\to(\mathbb R,+)$ è un isomorfismo, con inversa $x\mapsto e^x$.
- **segno:** $\mathrm{sgn}:S_n\to\{\pm1\}$ ha nucleo $A_n$.
- **esercizio svolto a lezione:** $g\mapsto g^2$ è un omomorfismo $\iff G$ è abeliano.

## Nei corsi
- **Istituzioni algebra** (triennale): lezioni 6-7, sezione "(Omo-mono-epi-iso-endo-auto)-morfismi". Fonti: `triennale/ANNO 2/istituzioni/Alg-10-10-22.pdf` (lezione 6, pp. 2-5); `triennale/ANNO 2/istituzioni/Alg-11-10-22.pdf` (lezione 7, pp. 5-7); `triennale/ANNO 2/istituzioni/Alg-25-10-22.pdf` (lezione 14, p. 9).

## Prerequisiti
- [[Gruppo]]: dominio e codominio sono gruppi
- [[Sottogruppo]]: nucleo e immagine sono sottogruppi

## Porta a
- [[Segno di una permutazione]]: $\mathrm{sgn}$ è un omomorfismo con nucleo $A_n$
- [[Teorema di Cayley]]: $a\mapsto\lambda_a$ è un omomorfismo iniettivo
- [[Sottogruppo normale e gruppo quoziente]]: i nuclei sono normali
- [[Primo teorema di isomorfismo]]: $G/\mathrm{Ker}f\simeq\mathrm{Im}f$
- [[Omomorfismo di anelli]]: è un omomorfismo dei gruppi additivi che rispetta anche il prodotto

## Collegati
- [[Applicazione lineare]]: un'applicazione lineare è in particolare un omomorfismo di gruppi additivi
- [[Nucleo e immagine]]: stesse nozioni nel contesto lineare, con lo stesso criterio di iniettività
- [[Determinante]]: il teorema di Binet dice che det è un omomorfismo
