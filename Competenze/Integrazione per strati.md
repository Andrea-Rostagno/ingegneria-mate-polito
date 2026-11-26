---
tipo: competenza
area: analisi
corsi: [Analisi 2]
livello: [triennale]
aliases: ["integration by slices", "integrazione per sezioni", "principio di Cavalieri", "Cavalieri's principle", "sezioni orizzontali"]
tags: [competenza, area/analisi]
---

# Integrazione per strati

> Un integrale triplo si calcola integrando su ogni sezione piana $S(z)$ e poi sommando le sezioni da $z_{\min}$ a $z_{\max}$.

## Definizione / enunciato
Per $\Omega\subset\mathbb R^3$ sia $S(z)=\{(x,y)\in\mathbb R^2:(x,y,z)\in\Omega\}$ la sezione a quota $z$, pensata nel piano $xy$, e siano $z_{\min},z_{\max}$ i valori estremi per cui $S(z)\ne\emptyset$.

**Teorema (Fubini per strati).**
$$\iiint_\Omega f(x,y,z)\,dx\,dy\,dz=\int_{z_{\min}}^{z_{\max}}\Big(\iint_{S(z)}f(x,y,z)\,dx\,dy\Big)dz.$$
Scambiando i ruoli delle variabili si ha lo stesso per strati perpendicolari all'asse $x$ o $y$.

## Formule chiave
Con $f=1$ si ottiene il **principio di Cavalieri**: $\mathrm{Vol}(\Omega)=\int_{z_{\min}}^{z_{\max}}\mathrm{Area}(S(z))\,dz$.

## Intuizione
È il duale dell'integrazione per fili: invece di sommare segmenti verticali si sommano "fette" orizzontali. Conviene quando $f$ dipende solo da $z$ e le sezioni hanno area nota.

## Come si usa
Semisfera di raggio 2 con foro conico ($z\le\sqrt{x^2+y^2}$): per $z\in[0,\sqrt2]$ la sezione è una corona di raggi $z$ e $\sqrt{4-z^2}$, quindi
$$\iiint_\Omega z=\int_0^{\sqrt2}z\,\pi\big((4-z^2)-z^2\big)\,dz=\pi\Big(2z^2-\tfrac{z^4}2\Big)\Big|_0^{\sqrt2}=2\pi.$$

## Nei corsi
- **Analisi 2** (triennale): lezione del 26/10/2022. Fonte: `triennale/ANNO 2/analisi 2/AII 09 2022 int tripli.pdf` (pp. 8-11).

## Prerequisiti
- [[Integrale triplo]]: integrale triplo per sezioni

## Porta a
- Nessuno.

## Collegati
- [[Teorema di Fubini]]: fili contro strati
